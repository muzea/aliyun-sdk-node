export interface SearchNodesByOutputRequest {
    /**
     * 调度运维中心环境标识：PROD表示生产环境，DEV表示开发环境。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 节点的输出串。支持多个值，多个值时请使用英文逗号（,）分隔。
     * @example `aaaaa.1231412_out,bbbb.12313123_out`
     */
    "Outputs": string;
}
