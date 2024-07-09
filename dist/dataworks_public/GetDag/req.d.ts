export interface GetDagRequest {
    /**
     * DagId可以是补数据CreateDagComplement，测试CreateTest，执行手动业务流程CreateManualDag等接口返回的DagId。
     * @example `123141452344525`
     */
    "DagId": number;
    /**
     * 调度运维环境的标识：PROD表示生产环境，DEV表示开发环境。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
