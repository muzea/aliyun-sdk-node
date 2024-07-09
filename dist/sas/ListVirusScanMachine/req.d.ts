export interface ListVirusScanMachineRequest {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 要查询的资产信息，可以设置为资产名称、IP。
     * @example `192.168.1****`
     */
    "Remark"?: string;
    /**
     * 资产实例的UUID。
     * @example `7cc91747-2845-40d4-bb69-c077597f****`
     */
    "Uuid"?: string;
}
