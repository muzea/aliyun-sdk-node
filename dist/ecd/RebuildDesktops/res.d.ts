export interface RebuildDesktopsResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 重建结果的集合。
     */
    RebuildResults: {
        /**
         * 重建结果。返回`success`表示成功，否则将返回错误信息。
         * @example `IncorrectDesktopStatus`
         */
        Code: string;
        /**
         * 错误信息。当`Code`为`success`时，不返回该参数。
         * @example `The current status of the desktop does not support this operation.`
         */
        Message: string;
        /**
         * 云电脑ID。
         * @example `ecd-gx2x1dhsmucyy****`
         */
        DesktopId: string;
    }[];
}
