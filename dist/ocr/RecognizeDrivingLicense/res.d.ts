export interface RecognizeDrivingLicenseResponse {
    /**
     * 请求ID。
     * @example `1DD989C1-4E08-4E04-9D5D-314901E91226`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 行驶证副页结果。
         */
        BackResult: {
            /**
             * 外廓尺寸。
             * @example `4945x1845x1480`
             */
            OverallDimension: string;
            /**
             * 检验记录。
             * @example `检验有效期至2014年09月云A(01)`
             */
            InspectionRecord: string;
            /**
             * 整备质量。
             * @example `2000`
             */
            UnladenMass: string;
            /**
             * 档案编号。
             * @example `苏F123E9`
             */
            FileNumber: string;
            /**
             * 准牵引总质量。
             * @example `100`
             */
            TractionMass: string;
            /**
             * 总质量。
             * @example `2205`
             */
            GrossMass: string;
            /**
             * 号牌号码。
             * @example `苏F123E9`
             */
            PlateNumber: string;
            /**
             * 核定载人数。
             * @example `5`
             */
            ApprovedPassengerCapacity: string;
            /**
             * 能源标志。
             * @example `-`
             */
            EnergyType: string;
            /**
             * 核定载质量。
             * @example `300`
             */
            ApprovedLoad: string;
        };
        /**
         * 行驶证首页结果。
         */
        FaceResult: {
            /**
             * 发证日期，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `20180313`
             */
            IssueDate: string;
            /**
             * 品牌型号。
             * @example `大众汽车牌SVW6666DFD`
             */
            Model: string;
            /**
             * 车辆类型。
             * @example `小型普通客车`
             */
            VehicleType: string;
            /**
             * 所有人名称。
             * @example `张三`
             */
            Owner: string;
            /**
             * 发动机号码。
             * @example `111111`
             */
            EngineNumber: string;
            /**
             * 车牌号码。
             * @example `苏F123E9`
             */
            PlateNumber: string;
            /**
             * 地址。
             * @example `中牟县三刘寨村`
             */
            Address: string;
            /**
             * 使用性质。
             * @example `非营运`
             */
            UseCharacter: string;
            /**
             * 车辆识别代号。
             * @example `SSVUDDTT2J2022555`
             */
            Vin: string;
            /**
             * 注册日期，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `20180312`
             */
            RegisterDate: string;
        };
    };
}
