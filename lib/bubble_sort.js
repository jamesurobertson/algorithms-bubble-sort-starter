// Use this pseudocode to implement the bubble sort
function bubbleSort (array) {
  // n := length(array)

  let swapping = true
  while (swapping) {
    swapping = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]]
        swapping = true
      }
    }

    return array
  }
  // repeat
  //  swapped = false
  //  for i := 1 to n - 1 inclusive do
  //
  //     /* if this pair is out of order */
  //     if A[i - 1] > A[i] then
  //
  //       /* swap them and remember something changed */
  //       swap(A[i - 1], A[i])
  //       swapped := true
  //
  //     end if
  //   end for
  // until not swapped
}

module.exports = {
  bubbleSort,
  swap
}
