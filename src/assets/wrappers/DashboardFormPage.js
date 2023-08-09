import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .tab {
    float: left;
    height: 44px;
    margin: 0 8px -1px 0;
    border: 1px solid #DAE0E7;
   background: #F9F9F9;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }
  
  .tab, .tab a {
    transition: all .25s;
  }
  
  .tab a {
    display: inline-block;
  }
  
  .tab a:first-child {
    padding: 12px 2px 12px 16px;
   white-space: nowrap;
  }
  
  .tab.tabClosed, .tab.tabClosed a:first-child {
    margin-right: 0;
    border-width: 0;
  }
  
  .tab.tabClosed {
    width: 0 !important;/* use important because we need to set the width of tabs in javascript in order to be able to animate them to 0 */
  }
  
  .tab.tabClosed a {
    opacity: 0;
  }
  
  .tab:hover {
    background: #fff;
  }
  
  .tabSelected {
    height: 45px;
    border-bottom: none;
    background: #fff;
  }
  
  .closeTab {
    width: 16px;
    height: 16px;
    margin: 0 14px 0 12px;
    padding: 3px;
    border-radius: 16px;
    line-height: 16px;
    text-align: center;
  }
  
  .closeTab:hover {
    background: #DAE0E7;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }

  
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
