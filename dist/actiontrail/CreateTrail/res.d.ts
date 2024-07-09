export interface CreateTrailResponse {
    /**
     * 跟踪投递的日志服务项目的ARN。
     * @example `acs:log:cn-hangzhou:151266687691****:project/test-project`
     */
    SlsProjectArn: string;
    /**
     * 操作审计向对象存储OSS存储空间投递操作事件时，扮演的角色ARN。
     * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
     */
    OssWriteRoleArn: string;
    /**
     * 投递事件的读写类型。
     * @example `Write`
     */
    EventRW: string;
    /**
     * 请求ID。
     * @example `442DDADF-DA58-4029-8E8B-82C73E9A7A70`
     */
    RequestId: string;
    /**
     * 跟踪的Home地域。
     * @example `cn-hangzhou`
     */
    HomeRegion: string;
    /**
     * OSS存储空间文件名的前缀。
     * @example `at-product-account-audit-B`
     */
    OssKeyPrefix: string;
    /**
     * OSS存储空间。
     * @example `audit-log`
     */
    OssBucketName: string;
    /**
     * 操作审计向日志服务项目投递操作事件时，扮演的角色ARN。
     * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
     */
    SlsWriteRoleArn: string;
    /**
     * 跟踪的地域。
     * @example `All`
     */
    TrailRegion: string;
    /**
     * 跟踪名称。
     * @example `trail-test`
     */
    Name: string;
    /**
     * 跟踪投递的大数据计算服务项目的ARN。
     * @example `acs:odps:cn-hangzhou:151266687691****:project/actiontrail_****`
     */
    MaxComputeProjectArn: string;
    /**
     * 操作审计向大数据计算服务项目投递操作事件时，扮演的角色ARN。
     * @example `acs:ram::151266687691****:role/aliyunserviceroleforactiontrail`
     */
    MaxComputeWriteRoleArn: string;
}
