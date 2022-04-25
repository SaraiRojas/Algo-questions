/* eslint-disable max-len */
/* eslint-disable no-continue */
const longestPeak = (arr) => {
  let longestPeakLength = 0;
  let i = 1;

  while (i < arr.length - 1) { // Loking for peaks
    const isPeak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]) { // while leftIdx is in range and smaller than the value at its right
      leftIdx--;
    }

    let rightIdx = i + 2;
    while (rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) { // while leftIdx is in range and smaller than the value at its left
      rightIdx++;
    }

    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }

  return longestPeakLength;
};

module.exports = longestPeak;
