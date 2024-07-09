export interface RecognizeVATInvoiceResponse {
    /**
     * 请求ID。
     * @example `56A10D65-ECE0-59DE-9775-F6494D2AF13B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 发票关键字位置框，格式为\[左上角点X轴坐标，左上角点Y轴坐标，右下角点X轴坐标，右下角点Y轴坐标]。
         */
        Box: {
            /**
             * 1
             */
            PayerRegisterNoes: number[];
            /**
             * 1
             */
            PayeeAddresses: number[];
            /**
             * 1
             */
            PayeeBankNames: number[];
            /**
             * 1
             */
            Checkers: number[];
            /**
             * 1
             */
            TaxAmounts: number[];
            /**
             * 1
             */
            SumAmounts: number[];
            /**
             * 1
             */
            Clerks: number[];
            /**
             * 1
             */
            InvoiceNoes: number[];
            /**
             * 1
             */
            InvoiceDates: number[];
            /**
             * 1
             */
            InvoiceCodes: number[];
            /**
             * 1
             */
            InvoiceFakeCodes: number[];
            /**
             * 1
             */
            PayerNames: number[];
            /**
             * 1
             */
            PayerBankNames: number[];
            /**
             * 1
             */
            Payees: number[];
            /**
             * 1
             */
            PayeeNames: number[];
            /**
             * 1
             */
            InvoiceAmounts: number[];
            /**
             * 1
             */
            WithoutTaxAmounts: number[];
            /**
             * 1
             */
            PayerAddresses: number[];
            /**
             * 1
             */
            PayeeRegisterNoes: number[];
            /**
             * 1
             */
            ItemNames: number[];
        };
        /**
         * 合计金额识别发票各项结果。
         */
        Content: {
            /**
             * 购买方地址、电话。
             * @example `浙江省杭州市西湖区杭大路9号聚龙大厦西区15-18楼0571-87901580`
             */
            PayerAddress: string;
            /**
             * 销售方纳税人识别号。
             * @example `91420200000123403`
             */
            PayeeRegisterNo: string;
            /**
             * 销售方开户行及账号。
             * @example `中国银行浙江省分行35845832****`
             */
            PayeeBankName: string;
            /**
             * 发票号码。
             * @example `03753869`
             */
            InvoiceNo: string;
            /**
             * 购买方纳税人识别号。
             * @example `91420200000123403`
             */
            PayerRegisterNo: string;
            /**
             * 复核人。
             * @example `张三`
             */
            Checker: string;
            /**
             * 合计税额。
             * @example `9.52`
             */
            TaxAmount: string;
            /**
             * 开票日期。
             * @example `20190415`
             */
            InvoiceDate: string;
            /**
             * 合计金额。
             * @example `190.48`
             */
            WithoutTaxAmount: string;
            /**
             * 价税合计（小写）。
             * @example `200.00`
             */
            InvoiceAmount: string;
            /**
             * 校验码。
             * @example `02702870934284730434`
             */
            AntiFakeCode: string;
            /**
             * 购买方名称。
             * @example `三号技术有限责任公司`
             */
            PayerName: string;
            /**
             * 收款人。
             * @example `张三`
             */
            Payee: string;
            /**
             * 价税合计（大写）。
             * @example `87`
             */
            SumAmount: string;
            /**
             * 购买方开户行及账号。
             * @example `6221************1234`
             */
            PayerBankName: string;
            /**
             * 开票人。
             * @example `张三`
             */
            Clerk: string;
            /**
             * 销售方名称。
             * @example `上海机场（集团）有限公司`
             */
            PayeeName: string;
            /**
             * 销售方地址、电话。
             * @example `上海虹桥机场迎宾二路161号22342185`
             */
            PayeeAddress: string;
            /**
             * 发票代码。
             * @example `031001600311`
             */
            InvoiceCode: string;
            /**
             * 1
             */
            ItemName: string[];
        };
    };
}
