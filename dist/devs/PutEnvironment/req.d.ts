export interface PutEnvironmentRequest {
    /**
     * 环境实体。当前实体的可写字段将被您指定的实体完全替换
     */
    "body"?: any;
    /**
     * 项目名称
     * @example `demo-project`
     */
    "project": string;
    /**
     * 环境名称
     * @example `demo-env`
     */
    "name": string;
    /**
     * 是否强制更新。若为`false`，则需要保证即将替换的环境实体为最新的，否则将抛出并发修改冲突异常。
     * @example `false`
     */
    "force"?: boolean;
}
