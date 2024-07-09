export interface UpgradeMeshVersionRequest {
    /**
     * ASM实例ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 是否执行预检查。默认false。为true时，本次调用只会检查当前网格是否满足升级条件，并不会真正执行升级。
     * @example `false`
     */
    "PreCheck"?: boolean;
}
