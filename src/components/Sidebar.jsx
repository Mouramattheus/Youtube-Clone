import { Stack } from "@mui/material"
import {categories} from "../utils/constants"



const Sidebar = ({selectCategory,setSelectCategory}) =>  (
    <Stack direction="row"
    sx={{
      overflowY:"auto",
      height: {sx: 'auto', md: '95%'},
      flexDirection:{md: 'column'},
    }}
    >
      {categories.map((category)=>(
        <button
        className="category-btn"
        onClick={()=>setSelectCategory(category.name)}
        style={{
          background:category.name === 
          selectCategory && '#FC1503',
          color:'white'
        }}
        key={category.name}
        >
          <span style={{color: category.name ===
          selectCategory ? 'white' : 'red', marginRight:'15px'}}>{category.icon}</span>
          <span style={{opacity: category.name ===
          selectCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}

    </Stack>
  )


export default Sidebar