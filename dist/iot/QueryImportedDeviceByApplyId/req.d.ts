export interface QueryImportedDeviceByApplyIdRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 指定返回结果中每页显示的记录数量，默认值为10，最大值不超过50。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询设备的申请批次ID。申请批次ID可在[BatchImportDevice](~~433878~~)接口返回结果中查看。
     * @example `1295006`
     */
    "ApplyId": number;
    /**
     * 指定显示返回结果中的第几页，取值范围为1~10,000。
     * @example `1`
     */
    "PageNo": number;
}
