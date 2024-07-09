export interface DescribeTrailsResponse {
    /**
     * 请求ID。
     * @example `ED8BC689-69DA-42AC-855E-3B06C1271194`
     */
    RequestId: string;
    /**
     * 跟踪列表。
     */
    TrailList: {
        /**
         * 跟踪的地域。
         * @example `All`
         */
        TrailRegion: string;
        /**
         * 跟踪状态，取值：
         * - Disable：停止。
         * - Enable：开启。
         * - Fresh：已创建跟踪，但未开启。
         * @example `Enable`
         */
        Status: string;
        /**
         * 跟踪配置最近一次更新的时间。
         * @example `2021-04-06T02:16:24Z`
         */
        UpdateTime: string;
        /**
         * 跟踪的Home地域。
         * @example `cn-hangzhou`
         */
        HomeRegion: string;
        /**
         * 跟踪创建的时间。
         * @example `2021-03-01T06:27:28Z`
         */
        CreateTime: string;
        /**
         * OSS存储空间文件名的前缀。
         * @example `trail1`
         */
        OssKeyPrefix: string;
        /**
         * 投递事件的读写类型，取值：
         * - Write（默认值）：写类型。
         * - Read：读类型。
         * - All：读类型和写类型。
         * @example `All`
         */
        EventRW: string;
        /**
         * 最近一次开启跟踪的时间。
         * @example `2021-04-06T02:08:38Z`
         */
        StartLoggingTime: string;
        /**
         * 操作审计向对象存储OSS存储空间投递操作事件时，扮演的角色ARN。
         * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
         */
        OssWriteRoleArn: string;
        /**
         * 跟踪投递的日志服务项目的ARN。
         * @example `acs:log:cn-qingdao:159498693826****:project/zhengze-audit-log`
         */
        SlsProjectArn: string;
        /**
         * 是否是多账号跟踪，取值：
         * - false（默认值）：否。
         * - true：是。
         * @example `false`
         */
        IsOrganizationTrail: boolean;
        /**
         * 操作审计向日志服务项目投递操作事件时，扮演的角色ARN。
         * @example `acs:ram::159498693826****:role/aliyunserviceroleforactiontrail`
         */
        SlsWriteRoleArn: string;
        /**
         * 最近一次停止跟踪的时间。
         * @example `2021-04-06T02:09:04Z`
         */
        StopLoggingTime: string;
        /**
         * 跟踪名称。
         * @example `test-4`
         */
        Name: string;
        /**
         * OSS存储空间的名称。
         * @example `secloud`
         */
        OssBucketName: string;
        /**
         * 跟踪所在地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 资源目录ID。
         * > 只有多账号跟踪返回该参数。
         * @example `rd-EV****`
         */
        OrganizationId: string;
        /**
         * OSS存储空间所在地域。
         * @example `oss-cn-hangzhou`
         */
        OssBucketLocation: string;
        /**
         * 跟踪的资源定位符。
         * @example `acs:actiontrail:cn-hangzhou:159498693826****:trail/test-delivery-other`
         */
        TrailArn: string;
        /**
         * 操作审计向大数据计算服务项目投递操作事件时，扮演的角色ARN。
         * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
         */
        MaxComputeWriteRoleArn: string;
        /**
         * 跟踪投递的大数据计算服务项目的ARN。
         * @example `acs:odps:cn-hangzhou:151266687691****:project/actiontrail_****`
         */
        MaxComputeProjectArn: string;
    }[];
}
