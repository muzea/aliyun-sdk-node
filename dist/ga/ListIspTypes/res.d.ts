export interface ListIspTypesResponse {
    /**
     * 请求ID。
     * @example `F591955F-5CB5-4CCE-A75D-17CF2085CE22`
     */
    RequestId: string;
    /**
     * 加速地域公网线路类型。
     * - **BGP**（默认值）：BGP（多线）线路。
     * - **BGP_PRO**：BGP（多线）\_精品线路。
     * 如果您是单线带宽的白名单用户，您还可能返回以下类型：
     * - **ChinaTelecom**：中国电信（单线）
     * - **ChinaUnicom**：中国联通（单线）
     * - **ChinaMobile**：中国移动（单线）
     * - **ChinaTelecom_L2**：中国电信（单线）\_L2
     * - **ChinaUnicom_L2**：中国联通（单线）\_L2
     * - **ChinaMobile_L2**：中国移动（单线）\_L2
     * > 加速地域不同，支持的单线线路类型不同。
     */
    IspTypeList: string[];
}
