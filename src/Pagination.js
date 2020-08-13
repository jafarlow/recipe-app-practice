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

    this.state ={ currentPage: 1 }
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

      
    }
  }
}

export default Pagination


































//
