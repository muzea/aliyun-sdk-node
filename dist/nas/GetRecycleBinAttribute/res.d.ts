export interface GetRecycleBinAttributeResponse {
    /**
     * 请求ID。
     * @example `9E15E394-38A6-457A-A62A-D9797C9A****`
     */
    RequestId: string;
    /**
     * 回收站描述信息。
     */
    RecycleBinAttribute: {
        /**
         * 回收站中文件的存储量。单位：Byte。
         * @example `100`
         */
        Size: number;
        /**
         * 回收站中低频数据存储量。单位：Byte。
         * @example `100`
         */
        SecondarySize: number;
        /**
         * 回收站状态。
         * 包括：
         * - Enable：回收站已启用。
         * - Disable：回收站已关闭。
         * @example `Disable`
         */
        Status: string;
        /**
         * 回收站中文件的保留时间。单位：天。
         * 当回收站状态为关闭时，该参数返回0。
         * @example `0`
         */
        ReservedDays: number;
        /**
         * 回收站开启的时间。
         * @example `2021-05-30T10:08:08Z`
         */
        EnableTime: string;
    };
}
