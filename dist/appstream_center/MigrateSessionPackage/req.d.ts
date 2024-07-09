export interface MigrateSessionPackageRequest {
    /**
     * 当前绑定SessionPackageId的源项目id，当SessionPackageId没有绑定项目时，这里请不要填写数据
     * @example `p-xxxxxx123x4312345`
     */
    "SourceProjectId"?: string;
    /**
     * SessionPackageId将要绑定的目标项目id。
     * @example `p-xxxxxx123x4312367`
     */
    "DestProjectId"?: string;
    /**
     * 会话包的唯一id，请确保这个会话包处于可用状态。
     * @example `tp-xxxxxxxxxxxxxxxxx`
     */
    "SessionPackageId": string;
}
