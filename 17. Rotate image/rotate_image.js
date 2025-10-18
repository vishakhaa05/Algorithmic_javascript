// Rotate Image Challenge
/*
   You are given an n x n 2D matrix representing an image, 
   rotate the image by 90 degrees (clockwise).

   You must rotate the image in-place 
   (do not allocate another 2D matrix).
*/

// ----------------------------------------------------------------
// 1st Method: Transpose + Reverse rows
/*
   Steps:
   1. Transpose the matrix (swap matrix[i][j] with matrix[j][i]).
   2. Reverse each row to get the final rotated matrix.
*/

function rotate(matrix) {
    let n = matrix.length;

    // Step 1: Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // swap matrix[i][j] with matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Example usage
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// Output: [[7,4,1],[8,5,2],[9,6,3]]


// ----------------------------------------------------------------
// 2nd Method: Rotate layer by layer (in-place without transpose)
/*
   Steps:
   - Rotate the matrix in layers (outer square, then inner square).
   - For each layer, move 4 elements at a time.
*/

function rotateInLayers(matrix) {
    let n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        let first = layer;
        let last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            let offset = i - first;

            // Save top
            let top = matrix[first][i];

            // Left -> Top
            matrix[first][i] = matrix[last - offset][first];

            // Bottom -> Left
            matrix[last - offset][first] = matrix[last][last - offset];

            // Right -> Bottom
            matrix[last][last - offset] = matrix[i][last];

            // Top -> Right
            matrix[i][last] = top;
        }
    }

    return matrix;
}

// Example usage
console.log(rotateInLayers([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
