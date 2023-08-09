import React, { Component } from 'react'
import FormSinhVien from './FormQLSV'
import TableSinhVien from './TableQLSV'
import Search from './SearchForm'
import SearchForm from './SearchForm'


export default class BaiTapForm
 extends Component {
  render() {
    return (
      <div className='container'>
        <h3>React Form - validation</h3>
        <FormSinhVien/>
        <div className='my-5'> <SearchForm/></div>    
        <TableSinhVien/>
      </div>
    )
  }
}
