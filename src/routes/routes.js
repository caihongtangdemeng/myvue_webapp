import goods from "pages/goods/goods"
import seller from "pages/ratings/ratings"
import ratings from "pages/seller/seller"
export default[
  {path:"/goods",component:goods},
  {path:"/seller",component:seller},
  {path:"/ratings",component:ratings},
  {path:"/",redirect:"/goods"}
]

