import { useContext } from 'react'
import styles from './StepOne.module.scss'
import { InputGroup } from '../StepForm'
import { CustomerContext } from 'Context/CustomerOrderContext'

const County = [
  {
    id:'KLU',
    name:'基隆市'
  },
  {
    id:'TPH',
    name:'新北市',
  },
  {
    id:'TPE',
    name:'臺北市',
  },
  {
    id:'TYC',
    name:'桃園市',
  },
  {
    id:'HSH',
    name:'新竹縣',
  },
  {
    id:'HSC',
    name:'新竹市',
  },
  {
    id:'MAC',
    name:'苗栗市',
  },
  {
    id:'MAL',
    name:'苗栗縣',
  },
  {
    id:'TXG',
    name:'臺中市',
  },
  {
    id:'CWH',
    name:'彰化縣',
  },
  {
    id:'CWS',
    name:'彰化市',
  },
]

export default function StepOne ({currentState}) {
  const { address, handleOrder } = useContext(CustomerContext) 

  return (
      (currentState === 1) && (
       <form  data-phase="address">
       <h3 className='formTitle'>寄送地址</h3>
       <section className='formBody'>
          <div className='col'>
            <div className={`${styles.inputGroup} ${styles.genderInfo}`}>
              <div className='inputLabel'>稱謂</div>
              <div className={styles.selectContainer}>
                <select name="稱謂" id="gender" value={address['稱謂']} onChange={(e) => {
                  handleOrder(e, 'address')
                }} required>
                  <option value="DEFAULT">稱謂</option>
                  <option value="先生">先生</option>
                  <option value="女士">女士</option>
                  <option value="不明">不明</option>
                </select>
              </div>
            </div>
            <InputGroup 
              labelName='姓名' 
              inputInfo={styles.nameInfo}
              placeholder="請輸入姓名"
              name="姓名"
              value={address['姓名']}
              onHandleChange={handleOrder} >
            </InputGroup>
          </div>
          <div className='col'>
            <InputGroup 
              labelName='電話' 
              inputInfo={styles.phoneInfo}
              type="tel" 
              placeholder="請輸入行動電話" 
              name="電話"
              value={address['電話']}
              onHandleChange={handleOrder} >
            </InputGroup>
            <InputGroup 
              labelName='email' 
              inputInfo={styles.emailInfo}
              type="email" 
              placeholder="請輸入電子郵件" 
              name="email"
              value={address['email']}
              onHandleChange={handleOrder} >
            </InputGroup>
          </div>
          <div className='col'>
          <div className={`${styles.inputGroup} ${styles.countryInfo}`}>
            <div className='inputLabel'>縣市</div>
              <div className={styles.selectContainer}>
                <select 
                name="縣市"
                defaultValue={address['縣市']}
                onChange={(e) => {
                handleOrder(e, 'address')
              }} required>
                  <option>請選擇縣市</option>
                    {County.map(item => 
                      <option key={item.id} value={item.name} >{item.name}</option>
                    )}
                </select>
              </div>
          </div>
            <InputGroup 
              labelName='地址' 
              inputInfo={styles.addressInfo}
              placeholder="請輸入地址"
              name="地址"
              value={address['地址']}
              onHandleChange={handleOrder} >
            </InputGroup>
          </div>
        </section>
      </form>
      )
  )
}