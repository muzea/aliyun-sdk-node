export interface DescribeDataCachesResponse {
    /**
     * 请求ID。
     * @example `B8756BA0-6452-419C-9727-37A6209C85E0`
     */
    RequestId: string;
    /**
     * 数据缓存信息。
     */
    DataCaches: {
        /**
         * 数据缓存ID。
         * @example `edc-bp15l4vvys94oo******
        `
         */
        DataCacheId: string;
        /**
         * 创建时间。
         * @example `2023-06-16T02:43Z`
         */
        CreationTime: string;
        /**
         * 数据缓存状态。可能值：
         * - Loading：缓存数据中
         * - Creating：创建中
         * - Available：创建成功
         * - Failed：创建失败
         * - Updating：更新中
         * - UpdateFailed：更新失败
         * 当状态为Available时，即可使用该数据缓存。
         * @example `Available`
         */
        Status: string;
        /**
         * 创建进度。
         * @example `100%`
         */
        Progress: string;
        /**
         * 最新一次匹配数据缓存的时间。
         * @example `2023-06-18T02:43Z`
         */
        LastMatchedTime: string;
        /**
         * 到期时间。
         * @example `2023-06-26T02:43Z
        `
         */
        ExpireDateTime: string;
        /**
         * 创建数据缓存过程中，生成的ECI实例ID。
         * @example `eci-8vb1y2w1dv7zeirn****`
         */
        ContainerGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `testkey`
             */
            Key: string;
            /**
             * 标签值。
             * @example `testvalue`
             */
            Value: string;
        }[];
        /**
         * 事件列表。
         */
        Events: {
            /**
             * 事件类型。可能值：
             * - Normal
             * - Warning
             * @example `Normal`
             */
            Type: string;
            /**
             * 事件结束时间。
             * @example `2021-06-16T02:24:48Z`
             */
            LastTimestamp: string;
            /**
             * 事件信息。
             * @example `Successfully check data cache resource.`
             */
            Message: string;
            /**
             * 事件名称。
             * @example `datacache`
             */
            Name: string;
            /**
             * 事件数。
             * @example `1`
             */
            Count: number;
            /**
             * 事件开始时间。
             * @example `2021-06-16T02:14:48Z`
             */
            FirstTimestamp: string;
            /**
             * 事件原因。
             * @example `Started`
             */
            Reason: string;
        }[];
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 快照ID。
         * @example `s-2zec5oj8e1yhxijt****`
         */
        SnapshotId: string;
        /**
         * 本地快照ID。
         * @example `s-bp12w3v37sit96t6****
        `
         */
        FlashSnapshotId: string;
        /**
         * 资源组ID。
         * @example `rg-aek2hlt3ux4****`
         */
        ResourceGroupId: string;
        /**
         * 数据缓存大小。单位为GiB。
         * @example `20`
         */
        Size: number;
        /**
         * 数据缓存名称。
         * @example `test`
         */
        Name: string;
        /**
         * 数据源信息。
         */
        DataSource: {
            /**
             * 数据源类型。可能值：
             * - NAS
             * - OSS
             * - URL
             * - SNAPSHOT
             * @example `URL`
             */
            Type: string;
            /**
             * 数据源的配置参数。
             * @example `{
                  "options": {
                        "path": "/",
                        "server": "0ce1f4****-or***.cn-hangzhou.nas.aliyuncs.com",
                        "vers": "3",
                        "options": "nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport"
                  },
                  "type": "NAS"
            }`
             */
            Options: string;
        };
        /**
         * 数据缓存Bucket。
         * @example `default`
         */
        Bucket: string;
        /**
         * 数据缓存对应Virtual Host的目录。
         * @example `/data/models/`
         */
        Path: string;
    }[];
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `d78f2dd8-5979-42fe-xaee-b16db43be5bc`
     */
    NextToken: string;
    /**
     * 符合查询条件的结果条数。
     * @example `2`
     */
    TotalCount: number;
}
