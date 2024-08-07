export interface CancelOTATaskByJobRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 升级批次ID。
     * 您调用[CreateOTAStaticUpgradeJob](~~147496~~)或[CreateOTADynamicUpgradeJob](~~147887~~)创建批次返回的**JobId**。您也可以在物联网平台控制台固件的**固件详情**页查看。
     * @example `7glPHmaDYLAYMD1HHutT02****`
     */
    "JobId": string;
    /**
     * 取消定时升级批次下的设备升级作业，即调用[CreateOTAStaticUpgradeJob](~~147496~~)时，传入了**ScheduleTime**参数创建的升级批次。取值：
     * - **true**：取消。
     * - **false**（默认）：不取消。
     * @example `false`
     */
    "CancelScheduledTask"?: boolean;
    /**
     * 取消批次下所有状态为待推送（**QUEUED**）的设备升级作业。取值：
     * - **true**：取消。
     * - **false**（默认）：不取消。
     * ><notice>该参数值为**true**时，如果传入**CancelUnconfirmedTask**参数值，则仅取消待推送状态的设备升级作业；如果不传入**CancelUnconfirmedTask**参数值，则会取消待确认和待推送状态的设备升级任务。
     * ></notice>
     * @example `false`
     */
    "CancelQueuedTask"?: boolean;
    /**
     * 取消批次下所有状态为升级中（**IN_PROGRESS**）的设备升级作业。取值：
     * - **true**：取消。
     * - **false**（默认）：不取消。
     * @example `false`
     */
    "CancelInProgressTask"?: boolean;
    /**
     * 取消批次下所有状态为已推送（**NOTIFIED**）的设备升级作业。取值：
     * - **true**：取消。
     * - **false**（默认）：不取消。
     * @example `false`
     */
    "CancelNotifiedTask"?: boolean;
    /**
     * 取消批次下所有状态为待确认（**CONFIRM**）的设备升级作业。取值：
     * - **true**：取消。
     * - **false**：不取消。
     * 默认值为空。
     * ><notice>如果不传入此参数，当**CancelQueuedTask**值为**true**时，会同步取消待确认状态的设备升级任务；当**CancelQueuedTask**值为**false**时，不会取消待确认状态的设备升级作业。
     * ></notice>
     * @example `false`
     */
    "CancelUnconfirmedTask"?: boolean;
}
