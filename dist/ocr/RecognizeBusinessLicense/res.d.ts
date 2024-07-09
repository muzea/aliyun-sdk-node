export interface RecognizeBusinessLicenseResponse {
    /**
     * 请求ID。
     * @example `F34D031B-02BD-4A59-BA35-EE068DD6F6E6`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 公司类型。识别失败时返回`FailInRecognition`。
         * @example `有限责任公司`
         */
        Type: string;
        /**
         * 印章位置。识别失败时返回`FailInDetection`。
         */
        Stamp: {
            /**
             * 区域左上角y坐标。
             * @example `1030`
             */
            Top: number;
            /**
             * 区域宽度。
             * @example `154`
             */
            Width: number;
            /**
             * 区域高度。
             * @example `154`
             */
            Height: number;
            /**
             * 区域左上角x坐标。
             * @example `650`
             */
            Left: number;
        };
        /**
         * 公司注册日期。例如证件上为“2014年04月16日”，则接口返回“20140416”。
         * @example `20150504`
         */
        EstablishDate: string;
        /**
         * 公司营业期限终止日期。例如证件上为“2014年04月16日至2034年04月15日”，则接口返回“20340415”。
         * > 当前算法将日期格式统一输出为“年月日”（例如“20391130”），并用“29991231”表示“长期”，若证件上没有营业期限，则默认其为“长期”返回“29991231”。
         * @example `29991231`
         */
        ValidPeriod: string;
        /**
         * 经营范围。识别失败时返回`FailInRecognition`。
         * @example `网络技术服务；网站建设；销售：I类医疗器械、保健用品（不含保健食品）等`
         */
        Business: string;
        /**
         * 输入图片的角度（顺时针旋转）。枚举值包括：0、90、180、270。
         * @example `0`
         */
        Angle: number;
        /**
         * 统一社会信用代码。识别失败时返回`FailInRecognition`。
         * @example `91500108320423****`
         */
        RegisterNumber: string;
        /**
         * 公司地址。识别失败时返回`FailInRecognition`。
         * @example `浙江省杭州市西湖区转塘科技经济区块888号888幢`
         */
        Address: string;
        /**
         * 注册资本。识别失败时返回`FailInRecognition`。
         * @example `壹百万元整`
         */
        Capital: string;
        /**
         * 标题位置。识别失败时返回`FailInDetection`。
         */
        Title: {
            /**
             * 区域左上角y坐标。
             * @example `10`
             */
            Top: number;
            /**
             * 区域宽度。
             * @example `10`
             */
            Width: number;
            /**
             * 区域高度。
             * @example `10`
             */
            Height: number;
            /**
             * 区域左上角x坐标。
             * @example `10`
             */
            Left: number;
        };
        /**
         * 国徽位置。识别失败时返回`FailInDetection`。
         */
        Emblem: {
            /**
             * 区域左上角y坐标。
             * @example `8`
             */
            Top: number;
            /**
             * 区域宽度。
             * @example `162`
             */
            Width: number;
            /**
             * 区域高度。
             * @example `163`
             */
            Height: number;
            /**
             * 区域左上角x坐标。
             * @example `366`
             */
            Left: number;
        };
        /**
         * 公司名称。识别失败时返回`FailInRecognition`。
         * @example `某某电子商务有限公司`
         */
        Name: string;
        /**
         * 二维码位置。识别失败时返回`FailInDetection`。
         */
        QRCode: {
            /**
             * 区域左上角y坐标。
             * @example `914`
             */
            Top: number;
            /**
             * 区域宽度。
             * @example `126`
             */
            Width: number;
            /**
             * 区域高度。
             * @example `132`
             */
            Height: number;
            /**
             * 区域左上角x坐标。
             * @example `156`
             */
            Left: number;
        };
        /**
         * 公司法人。识别失败时返回`FailInRecognition`。
         * @example `李四`
         */
        LegalPerson: string;
    };
}
