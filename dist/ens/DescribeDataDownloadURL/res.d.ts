export interface DescribeDataDownloadURLResponse {
    /**
     * 数据文件下载地址列表。
     */
    Data: {
        /**
         * 文件服务器列表。
         */
        ServerList: {
            /**
             * 文件服务器Host地址。
             * @example `1.1.1.1:8080`
             */
            Host: string;
            /**
             * ENS边缘节点ID。
             * @example `cn-chenzhou-5`
             */
            RegionId: string;
        }[];
        /**
         * 文件下载URL路径。
         * @example `/file/1450088842124331/97a32f2a-aa2c-436a-b19c-05b20d258618/f0313053530fc727f81b7d03fad93cd2/e4c2e8edac362acab7123654b9e73432?ak=edgepaas-innerapi-daily&ts=1611229454&sign=Yycbax%2F4OsTgm6BLoxR6lPs5gKE%3D`
         */
        Url: string;
        /**
         * 下载地址过期时间，UTC时间。
         * @example `2021-12-10T03:36:27Z`
         */
        ExpireTime: string;
    };
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回码。
     * @example `0`
     */
    Code: number;
    /**
     * 响应消息，若成功请求为success。
     * @example `Success`
     */
    Message: string;
}
