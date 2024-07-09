export interface ListFpShotDBRequest {
    /**
     * DNA库ID列表，可以从[提交新建DNA库](~~170149~~)的返回参数中获取。⼀次最多查10个，ID之间⽤半角逗号（,）分隔。
     * @example `2288c6ca184c0e47098a5b665e2a12****,ae687c02fe944327ba9631e50da2****`
     */
    "FpDBIds"?: string;
}
