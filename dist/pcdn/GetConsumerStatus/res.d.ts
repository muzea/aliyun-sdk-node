export interface GetConsumerStatusResponse {
    /**
     * 审核意见。
     * @example `审核通过`
     */
    Comment: string;
    /**
     * 是否在服务状态。
     * @example `true`
     */
    Inservice: boolean;
    /**
     * 创建时间。
     * @example `2018-01-01 10:48:48`
     */
    CreatedAt: string;
    /**
     * 业务类型。取值：
     * - **vod**：表示点播。
     * - **live**：表示直播。
     * - **download**：表示下载。
     * @example `vod`
     */
    BusinessType: string;
    /**
     * 是否支持直播监控。
     * @example `false`
     */
    LiveMonitor: boolean;
    /**
     * 是否支持CDN跳转。
     * @example `false`
     */
    CdnUrlRedirectFlag: boolean;
    /**
     * 请求ID。
     * @example `23321CEB-637B-44B3-B39C-B47FD36850F5`
     */
    RequestId: string;
    /**
     * 是否支持实时监控。
     * @example `false`
     */
    RealtimeMonitor: boolean;
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 修改时间。
     * @example `2018-01-01 10:48:48`
     */
    UpdatedAt: string;
    /**
     * 审核状态。取值：
     * - **1**：表示通过。
     * - **0**：表示审核中。
     * - **-1**：表示不通过。
     * @example `1`
     */
    Audit: number;
    /**
     * 集成模式。取值：
     * - **1**：表示合并计价。
     * - **2**：表示拆分计价。
     * @example `1`
     */
    IntegreatedMode: number;
}
