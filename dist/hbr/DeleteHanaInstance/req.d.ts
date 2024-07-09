export interface DeleteHanaInstanceRequest {
    /**
     * 备份库仓库ID。
     * @example `v-0008n2******ax3`
     */
    "VaultId": string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000g4z09******9cfc`
     */
    "ClusterId": string;
    /**
     * SAP HANA数据库的SID。SID必须与HANA实例匹配，且只能以字母开头，长度为3个字符。更多信息，请参见[如何查找SID](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)。
     * @example `HXE`
     */
    "Sid": string;
    /**
     * 资源组ID。
     * @example `rg-acfmwutpyat2kwy`
     */
    "ResourceGroupId"?: string;
}
