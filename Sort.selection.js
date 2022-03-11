/**
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 重复第二步，直到所有元素均排序完毕。
 */

function selectionSort (data) {
    for (let i = 0; i < data.length; i++) {
        let min = i;

        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = data[i];
            data[i] = data[min];
            data[min] = temp;
        }
    }
    return data;
}