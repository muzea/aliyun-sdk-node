export interface CreateNetworkReachableAnalysisRequest {
    /**
     * 要创建网络可达性分析的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 网络路径ID。 您可以通过调用[CreateNetworkPath](~~2366522~~)接口获取网络路径ID。
     * @example `np-b2f618ceb2c84057****`
     */
    "NetworkPathId": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * 一次调用最多支持添加20个标签。
         * @example `Team`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。一旦输入该值，可以为空字符串。
         * 一次调用最多支持添加20个标签值。
         * @example `ops`
         */
        Value: string;
    }[];
}
