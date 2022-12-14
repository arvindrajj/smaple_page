import {Colors} from '../colors'
import {useState} from 'react'

interface HeaderTemp {
    id: number,
    tabName: string,
    selectedTab?: boolean,
}
 

function createItems<Type>(items:Type[]):Type[]{ return [...items]}

let tabs = createItems<HeaderTemp>([
    { 
      id: 1,
      tabName: 'Daybook',
      selectedTab: false,
    },
    { 
      id: 2,
      tabName: 'Payments',
      selectedTab: false,
    },
    {
      id: 3,
      tabName: 'Settlements',
      selectedTab: false,
    },
    {
      id: 4,
      tabName: 'Received',
      selectedTab: true,
    },
    {
      id: 5,
      tabName: 'Customers',
      selectedTab: false,
    },
])


const Header = () => {
   const [tabList, setTabList] = useState(tabs)
    return (
        <div 
          style={{
          backgroundColor: Colors.zonoPrimaryDark,
          height: '8vh',
          width: '100vw',
        }}>
            <ul style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 0,
                  width: '46%',
                  paddingLeft: '39px',
                  listStyleType: 'none',
                  
            }}>
              {tabList.map(each => {
                const color = each.selectedTab? '#e85b49' : '#909195'
                const textDecoration = each.selectedTab? 'underline #e85b49 3px' : 'none'

                return (
                <li style={{
                      color: color,
                      textDecoration: textDecoration,
                      cursor: 'pointer',
                    }}
                    key={each.id}
                    onClick={() => setTabList(tabList.map((item) => {
                      if (item.id === each.id) {
                        return { ...item, selectedTab: true}
                      } else {
                        return {...item, selectedTab: false}
                      }
                    }))}
                >
                  <p>{each.tabName}</p>
                </li>
                )
              })}
            </ul>
        </div>
    )
}

export default Header
