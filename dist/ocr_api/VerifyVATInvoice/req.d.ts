export interface VerifyVATInvoiceRequest {
    /**
     * 发票代码。数电发票（发票类型代码为31，32）时可为空（发票类型代码见**发票类型代码说明**）。
     * @example `044032100311`
     */
    "InvoiceCode"?: string;
    /**
     * 发票号码。
     * @example `66932410`
     */
    "InvoiceNo": string;
    /**
     * 开票日期（日期格式为：YYYYMMDD）。
     * @example `20220617`
     */
    "InvoiceDate": string;
    /**
     * 发票类型代码为 01，03，15，20，31，32 时必填：为 01，03，20 时填写发票**不含税金额**；为 15 时填写发票**车价合计**；为 31，32 时填写**含税金额**；为区块链发票（InvoiceKind=1）时填写 **不含税金额**。
     * 其它类型可为空（详见**发票类型代码说明**）。
     * @example `102`
     */
    "InvoiceSum"?: string;
    /**
     * 机器验证码，取**后6位**。发票类型代码为 04，10，11，14 时必填，为区块链发票（InvoiceKind=1）时必填，其他发票种类可为空（详见**发票类型代码说明**）。
     * @example `980769`
     */
    "VerifyCode"?: string;
    /**
     * 发票类型。用来区分是否为 **区块链发票**。
     * * InvoiceKind=0 或不填，表示 **非区块链发票**。
     * * InvoiceKind=1，表示 **区块链发票**。注意，如果核验区块链发票，则 **InvoiceCode**，**InvoiceNumber**，**InvoiceDate**，**InvoiceSum**，**VerifyCode** 这5个入参均为必传参数。
     * @example `0`
     */
    "InvoiceKind"?: number;
}
