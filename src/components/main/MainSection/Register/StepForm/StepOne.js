import styles from './StepStyle/StepOne.module.scss'

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



 function InputGroup ({labelName, inputInfo, children}) {
  return(
    <div className={`${styles.inputGroup} ${inputInfo}`}>
      <div className='inputLabel'>{labelName}</div>
        {children}
    </div>
  )
}


export default function StepOne () {
  return (
      <>
       <form  data-phase="address">
       <h3 className='formTitle'>寄送地址</h3>
       <section className='formBody'>
          <div className='col'>
            <InputGroup labelName='稱謂' inputInfo={styles.genderInfo}>
              <div className={styles.selectContainer}>
                <select name="gender" id="gender">
                  <option value="DEFAULT">稱謂</option>
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </InputGroup>
            <InputGroup labelName='姓名' inputInfo={styles.nameInfo}>
            <input type="text" placeholder="請輸入姓名" />
            </InputGroup>
          </div>
          <div className='col'>
            <InputGroup labelName='電話' inputInfo={styles.phoneInfo}>
              <input type="tel" placeholder="請輸入行動電話" />
            </InputGroup>
            <InputGroup labelName='email' inputInfo={styles.emailInfo}>
              <input type="email" placeholder="請輸入電子郵件" />
            </InputGroup>
          </div>
          <div className='col'>
            <InputGroup labelName='縣市' inputInfo={styles.countryInfo}>
            <div className={styles.selectContainer}>
                <select required>
                  <option value="">請選擇縣市</option>
                    {County.map(item => 
                      <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>
              </div>
            </InputGroup>
            <InputGroup labelName='地址' inputInfo={styles.addressInfo}>
              <input type="text" placeholder="請輸入地址" />
            </InputGroup>
          </div>
        </section>
      </form>
     
      </>
  )
}