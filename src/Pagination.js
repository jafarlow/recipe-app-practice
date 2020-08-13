import React, { Component, Fragment } from 'react'

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

// create a range of numbers
const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (1 <= to) {
    range.push(i)
    i += step
  }

  return range
}

class Pagination extends Component {
  constructor(props) {
    super(props)
    const { totalRecipes = null, pageLimit = 12, pageNeighbors = 1 } = props

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 12;
    this.totalRecipes = typeof totalRecipes === 'number' ? totalRecipes : 0;

    this.pageNeighbors = typeof pageNeighbors === 'number'
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecipes / this.pageLimit)

    this.state = { currentPage: 1 }
  }

  componentDidMount() {
    this.gotoPage(1)
  }

  gotoPage = (page) => {
    const { onPageChanged = f => f } = this.props
    const currentPage = Math.max(0, Math.min(page, this.totalPages))
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecipes: this.totalRecipes
    }

    this.setState({ currentPage }, () => onPageChanged(paginationData))
  }

  handleClick = (page) => (event) => {
    event.preventDefault()
    this.gotoPage(page)
  }

  handleMoveLeft = (event) => {
    event.preventDefault()
    this.gotoPage(this.state.currentPage - (this.pageNeighbors * 2) - 1)
  }

  handleMoveRight = (event) => {
    event.preventDefault()
    this.gotoPage(this.state.currentPage + (this.pageNeighbors * 2) + 1)
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages
    const currentPage = this.state.currentPage
    const pageNeighbors = this.pageNeighbors

    // total page numbers to show on the nav control
    const totalNumbers = (this.pageNeighbors * 2) + 3

    // might need to adjust this number as the tutorial is using 2 pageNeighbors, whereas I want 1
    // using +2 to cover the left & right controls
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, (currentPage - pageNeighbors))
      const endPage = Math.min((totalPages - 1), (currentPage + pageNeighbors))

      // calling in range declared outside the component
      let pages = range(startPage, endPage)

      // hidden pages to the left
      const hasLeftSpill = startPage > 2

      // hidden pages to the right
      const hasRightSpill = (totalPages - endPage) > 1

      // number of hidden pages to the left or right
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // if hidden to the left but not the right
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range((startPage - spillOffset), (startPage - 1))
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break;
        }

        // if hidden to the right but not the left
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range((endPage + 1), (endPage + spillOffset))
          const pages = [...pages, ...extraPages, RIGHT_PAGE]
          break;
        }

        // if hidden both to the left and to the right
        case (hasLeftSpill && hasRightSpill): {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break;
        }
      }

      // 1st and last page # will always be visible
      return [1, ...pages, totalPages]
    }

    // return this when the `if` isn't triggered
    return range(1, totalPages)
  }

  // NOTE NOTE: WRITE AN SR-ONLY CLASS IN SCSS!!!!!!! NOTE NOTE
  render () {
    if (!this.totalRecipes || (this.totalPages === 1)) return null

    // call in the default set in constructor
    const { currentPage } = this.state

    // initialize fetchPageNumbers function
    const pages = this.fetchPageNumbers()

    return (
      <Fragment>
        <nav>
          <ul>
            { pages.map((page, index) => {

              {/* return on same line to reduce pyramid indent */}
              if (page === LEFT_PAGE) return {
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={this.handleMoveLeft}
                  >
                    {/* 2 spans, one shown just to SR, one just to visual users */}
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              }

              if (page === RIGHT_PAGE) return {
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={this.handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              }

              return (
                <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={this.handleClick(page)}
                  >
                    {page}
                  </a>
                </li>
              )

            }) }

          </ul>
        </nav>
      </Fragment>
    )
  }
}

export default Pagination


































//
