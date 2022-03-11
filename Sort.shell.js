/**
 * 希尔排序的名称来源于算法的发明者 Donald Shell 唐纳德.希尔
 * 希尔排序实际上是一种增量插入算法
 * 希尔算法是被证明可行并正确的，但是如果真的理解希尔排序，需要大量的数学基础并进行证明
 * 因此，对于希尔算法，初步只需要知道方法而不需要知道为什么
 * 关于详细的希尔算法请参与网络资料
 * 以下代码只做参考
 */
 function shellSort (data) {
    for (let gap = Math.floor(data.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < data.length; i++){
            for (let j = i; j >= 0; j = j - gap) {
                if (j - gap >= 0 && data[j - gap] > data[j]) {
                    let temp = data[j];
                    data[j] = data[j - gap];
                    data[j - gap] = temp;
                }

            }
        }
    }
}