export interface DescribeMeterImpPlayBackTimeByLiveIdResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 查询回看时长返回结果。
     */
    Data: {
        /**
         * 回看时长，单位分钟。
         * @example `32`
         */
        WatchTime: number;
    }[];
}
