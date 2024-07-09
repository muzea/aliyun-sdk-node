export interface CheckControlPlaneLogEnableResponse {
    /**
     * 控制平面组件日志对应存储的SLS Project名称。
     * 默认值：k8s-log-$集群ID。
     * @example `k8s-log-c5b5e80b0b64a4bf6939d2d8fbbc5****`
     */
    log_project: string;
    /**
     * 日志在SLS logstore里的数据保存时间。取值范围：1~3000，单位：天。
     * 默认值：30天。
     * @example `30`
     */
    log_ttl: string;
    /**
     * 阿里云账号ID。
     * @example `162981*****`
     */
    aliuid: string;
    /**
     * 当前开启控制平面日志的组件列表。
     */
    components: string[];
}
