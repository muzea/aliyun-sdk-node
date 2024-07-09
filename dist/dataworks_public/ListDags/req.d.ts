export interface ListDagsRequest {
    /**
     * 补数据唯一标识。您可通过调用[GetDag](~~189753~~)接口获取。
     * @example `123`
     */
    "OpSeq": number;
    /**
     * 调度运维环境的标识：PROD表示生产环境，DEV表示开发环境。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
