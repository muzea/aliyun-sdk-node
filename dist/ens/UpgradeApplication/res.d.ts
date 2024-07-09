export interface UpgradeApplicationResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 任务ID，可以通过任务ID查询升级进度或状态。
     * @example `6f24a774-6bd5-4026-bb7d-deffb1dad875`
     */
    TaskId: string;
}
