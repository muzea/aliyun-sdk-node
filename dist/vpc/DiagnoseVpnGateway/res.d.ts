export interface DiagnoseVpnGatewayResponse {
    /**
     * 诊断ID。
     * 当前接口返回诊断ID后，您可以调用[GetVpnGatewayDiagnoseResult](~~2521963~~)接口查询诊断报告。
     * @example `vpndgn-uf6kuxbe3iv028k3s****`
     */
    DiagnoseId: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
}
