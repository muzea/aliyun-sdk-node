export interface DescribePropertyCountResponse {
    /**
     * 进程数量。
     * @example `367`
     */
    Process: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 用户数量。
     * @example `214`
     */
    User: number;
    /**
     * 软件数量。
     * @example `111`
     */
    Software: number;
    /**
     * 计划任务数量。
     * @example `123`
     */
    Cron: number;
    /**
     * 端口数量。
     * @example `22`
     */
    Port: number;
    /**
     * 中间件数量。
     * @example `112`
     */
    Sca: number;
    /**
     * Web站点数量。
     * @example `65`
     */
    Web: number;
    /**
     * 数据库数量。
     * @example `2`
     */
    Database: number;
    /**
     * 内核模块数量。
     * @example `4`
     */
    Lkm: number;
    /**
     * 启动项数量。
     * @example `3`
     */
    Autorun: number;
    /**
     * web服务数量。
     * @example `8`
     */
    Webserver: number;
}
