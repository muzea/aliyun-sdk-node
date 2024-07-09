export interface ListHoneypotAttackerPortraitResponse {
    /**
     * 攻击者画像列表。
     */
    List: {
        /**
         * 攻击者画像ID。
         * @example `cd48604a-1694-4f03-ade0-ec6994c3****`
         */
        PortraitId: string;
        /**
         * 攻击次数。
         * @example `10`
         */
        AttackCount: number;
        /**
         * 最新发现时间戳。单位：毫秒。
         * @example `1679896965`
         */
        LastTime: number;
        /**
         * 攻击源的主机信息列表。
         */
        Host: string[];
        /**
         * 攻击源的浏览器信息列表。
         */
        Browser: string[];
        /**
         * 攻击源的社交信息列表。
         */
        Social: string[];
        /**
         * 攻击源的网络信息。
         */
        Network: {
            /**
             * 公网IP地址列表。
             */
            ExternalIp: string[];
            /**
             * 真实IP地址列表。
             */
            RealIp: string[];
            /**
             * 私网IP地址列表。
             */
            InternalIp: string[];
        };
    }[];
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `2`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `25`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `11`
         */
        Count: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8A5A2DA6-67EA-5968-960F-6B20FD0C*****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
