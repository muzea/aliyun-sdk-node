export interface DescribeImageListBySensitiveFileResponse {
    /**
     * 镜像信息列表。
     */
    ImageInfos: {
        /**
         * 镜像的唯一标识。
         * @example `f58681174f944623345379e23b7b****`
         */
        Uuid: string;
        /**
         * 镜像实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像实例的ID。
         * @example `cri-a595qp31knh9****`
         */
        InstanceId: string;
        /**
         * 镜像仓库的命名空间。
         * @example `libssh2`
         */
        RepoNamespace: string;
        /**
         * 镜像仓库的名称。
         * @example `opa-test`
         */
        RepoName: string;
        /**
         * 镜像摘要。
         * @example `v005`
         */
        Digest: string;
        /**
         * 镜像标签。
         * @example `nuxeo6`
         */
        Tag: string;
        /**
         * 首次扫描的时间戳，单位：毫秒。
         * @example `1649814050000`
         */
        FirstScanTime: number;
        /**
         * 最新扫描的时间戳，单位：毫秒。
         * @example `1649814050000`
         */
        LastScanTime: number;
        /**
         * 等级。取值：
         * - **high**：高危。
         * - **medium**：中危。
         * - **low**：低危。
         * @example `low`
         */
        RiskLevel: string;
        /**
         * 敏感文件状态。取值：
         * - **0**：未处理。
         * - **1**：忽略。
         * - **2**：误报。
         * @example `0`
         */
        Status: string;
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的告警事件的数量。默认值为**20**，表示每页显示20条告警事件。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `83`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `4`
         */
        Count: number;
        /**
         * 最后一条数据的键。
         * @example `CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2NDc4NjE=`
         */
        LastRowKey: string;
    };
    /**
     * 接口调用的结果状态。取值：
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
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E0C5C07F-1576-509A-AE44-1C36B8445B37`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
