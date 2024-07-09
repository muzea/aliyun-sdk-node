export interface DeleteDNAFilesRequest {
    /**
     * 需要删除文件的DNA库ID。
     * @example `fb712a6890464059b1b2ea7c8647****`
     */
    "DBId": string;
    /**
     * 需要删除的文件主键，用半角逗号（,）分隔，一次最多删除50个。
     * @example `41e6536e4f2250e2e9bf26cdea19****`
     */
    "PrimaryKeys": string;
}
