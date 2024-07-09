export interface RecognizeDriverLicenseResponse {
    /**
     * 请求ID。
     * @example `374D8C7E-9ECC-4750-A87F-50571702F175`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 驾驶证副页结果。
         */
        BackResult: {
            /**
             * 档案编号。
             * @example `130601473955`
             */
            ArchiveNumber: string;
            /**
             * 姓名。
             * @example `张三`
             */
            Name: string;
            /**
             * 证号。
             * @example `210288898898898888`
             */
            CardNumber: string;
            /**
             * 记录。
             * @example `实习期至2019年05月06日。`
             */
            Record: string;
        };
        /**
         * 驾驶证首页结果。
         */
        FaceResult: {
            /**
             * 驾驶证准驾车型。
             * @example `C1`
             */
            VehicleType: string;
            /**
             * 初次发证日期。格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `20130208`
             */
            IssueDate: string;
            /**
             * 驾驶证有效期时长或有效期截止日期。具体视驾驶证数据格式而定，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `20190201`
             */
            EndDate: string;
            /**
             * 性别。
             * @example `男`
             */
            Gender: string;
            /**
             * 地址。
             * @example `江苏省徐州市铜山区棠张镇田河村1队129号`
             */
            Address: string;
            /**
             * 驾驶证有效期开始时间，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `20130208`
             */
            StartDate: string;
            /**
             * 证号。
             * @example `210288898898898888`
             */
            LicenseNumber: string;
            /**
             * 姓名。
             * @example `张三`
             */
            Name: string;
            /**
             * 发证单位。
             * @example `江苏省徐州市公安局交通巡逻警察支队`
             */
            IssueUnit: string;
            /**
             * 国籍。
             * @example `中国`
             */
            Nationality: string;
            /**
             * 出生日期。
             * @example `1992-05-20`
             */
            BirthDate: string;
        };
    };
}
