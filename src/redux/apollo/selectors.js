const emptyArray = []
export const getUserHoldings = (data) => {
  return (data && data.user && data.user.holdings)
    ? data.user.holdings
    : emptyArray
}
