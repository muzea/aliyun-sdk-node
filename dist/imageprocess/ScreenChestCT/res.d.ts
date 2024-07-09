export interface ScreenChestCTResponse {
    /**
     * 请求ID。
     * @example `528B54D4-3AAB-47CF-B6CE-0C2A2FB4C7C2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 骨密度估计算法的输出结果。
         */
        CalcBMD: {
            /**
             * 椎体检出结果。
             */
            Detections: {
                /**
                 * 椎体编号。
                 * @example `L1`
                 */
                VertId: string;
                /**
                 * 椎体骨密度估计值，单位为g/c㎡。
                 * @example `0.78`
                 */
                VertBMD: number;
                /**
                 * 椎体T评分。
                 * @example `-2.5`
                 */
                VertTScore: number;
                /**
                 * 椎体Z评分。
                 * @example `NaN`
                 */
                VertZScore: number;
                /**
                 * 椎体分类。
                 * - 0：正常
                 * - 1：骨质减少
                 * - 2：骨质疏松
                 * @example `NaN`
                 */
                VertCategory: number;
            }[];
            /**
             * 每个像素之间的物理距离间隔。
             */
            Spacing: number[];
            /**
             * 像素坐标系原点在物理坐标系中的位置。
             */
            Origin: number[];
            /**
             * NIFTI格式的分割mask文件HTTP地址。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-bmd/local_test/2023-03-31/7772ECE3-22A7-193F-81B4-B0D6A02B5DAF-result.tgz?Expires=1680486509&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=GWi%2BhCCtamefKVYiS9oZJduswH****`
             */
            ResultURL: string;
            /**
             * 当前结果对应的序列ID。
             * @example `1.3.116.569382.6757.2.6.1.895664.343664213.6748794746.650139`
             */
            SeriesInstanceUid: string;
        };
        /**
         * 脂肪肝检测算法的输出结果。
         */
        DetectLiverSteatosis: {
            /**
             * 脂肪肝检出结果。
             */
            Detections: {
                /**
                 * 肝脏ROI1中心坐标。
                 */
                ROI1Center: number[];
                /**
                 * 肝脏ROI2中心坐标。
                 */
                ROI2Center: number[];
                /**
                 * 肝脏ROI3中心坐标。
                 */
                ROI3Center: number[];
                /**
                 * 脾脏ROI中心坐标。
                 */
                SpleenCenter: number[];
                /**
                 * 圆形ROI半径。
                 * @example `1.0`
                 */
                Radius: number;
                /**
                 * 肝脏ROI对应的slice坐标。
                 * @example `12.0`
                 */
                LiverSlice: number;
                /**
                 * 脾脏ROI对应的slice坐标。
                 * @example `9.0`
                 */
                SpleenSlice: number;
                /**
                 * 肝脏体积测量。单位：cm³（立方厘米）。
                 * @example `1059.4175610625439`
                 */
                LiverVolume: number;
                /**
                 * 脾脏体积测量。单位：cm³（立方厘米）。
                 * @example `156.01873229470647`
                 */
                SpleenVolume: number;
                /**
                 * 肝脏衰减值。
                 * @example `62.07644147383561`
                 */
                LiverHU: number;
                /**
                 * 脾脏衰减值。
                 * @example `53.86993919857013`
                 */
                SpleenHU: number;
                /**
                 * 肝脏局部ROI1衰减值。
                 * @example `63.50222396850586`
                 */
                LiverROI1: number;
                /**
                 * 肝脏局部ROI2衰减值。
                 * @example `62.23713684082031`
                 */
                LiverROI2: number;
                /**
                 * 肝脏局部ROI3衰减值。
                 * @example `59.78181838989258`
                 */
                LiverROI3: number;
                /**
                 * 脾脏局部ROI衰减值。
                 * @example `50.553409576416016`
                 */
                SpleenROI: number;
                /**
                 * 肝脾衰减差。
                 * @example `8.206502275265478`
                 */
                LiverSpleenDifference: number;
                /**
                 * 肝脾衰减比。
                 * @example `1.15233917834983`
                 */
                LiverSpleenRatio: number;
                /**
                 * 检测结果等级，包括无，轻，中，重。
                 * @example `Mod`
                 */
                Prediction: string;
                /**
                 * 脂肪肝概率。
                 * @example `0.9457855224609375`
                 */
                Probability: number;
            }[];
            /**
             * 每个像素之间的物理距离间隔。
             */
            Spacing: number[];
            /**
             * 像素坐标系原点在物理坐标系中的位置。
             */
            Origin: number[];
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.230.569382.6757.2.6.1.895664.343664213.6748794746.650139`
             */
            SeriesInstanceUid: string;
        };
        /**
         * 肺结节检测算法的输出结果。
         */
        LungNodule: {
            /**
             * 本次影像分析的分序列的结果，只支持单序列，故该jsonArray的长度为1。数组元素为单个序列的检测结果，由analysisResult和seriesInstanceUid构成。
             */
            Series: {
                /**
                 * 当前结果对应的序列ID。
                 * @example `1.3.6.1.4.1.14519.5.2.1.6279.6001.179049373636438705059720603192`
                 */
                SeriesInstanceUid: string;
                /**
                 * 结节描述。
                 */
                Elements: {
                    /**
                     * 肺叶分段。取值包括：up（上叶）、middle（中叶）、down（下叶）及unknown（未知）。
                     * @example `up`
                     */
                    Lobe: string;
                    /**
                     * 平均CT值，单位为HU。
                     * @example `261.37589112119247`
                     */
                    MeanValue: number;
                    /**
                     * 结节在肺叶的位置。取值包括：left（左肺）、right（右肺）及unknown（未知）。
                     * @example `left`
                     */
                    Lung: string;
                    /**
                     * 结节分类的置信度。
                     * @example `0.7012705768508907`
                     */
                    Confidence: number;
                    /**
                     * 结节中心位置所在帧的ID标识。
                     * @example `1.3.6.1.4.1.14519.5.2.1.6279.6001.261151233960269013402330853013`
                     */
                    SOPInstanceUID: string;
                    /**
                     * 结节分类。取值包括：
                     * - 0：ggo（磨玻璃影）
                     * - 1：part-solid（部分实性）
                     * - 2：solid（实性）
                     * - 3：unknown（未知）
                     * @example `1`
                     */
                    Category: string;
                    /**
                     * 结节体积，单位为平方毫米。
                     * @example `10959.220491175074`
                     */
                    Volume: number;
                    /**
                     * 结节的直径。
                     * @example `9.730626493692398`
                     */
                    Diameter: number;
                    /**
                     * 结节在物理坐标系中的x轴坐标值。
                     * @example `51.24291240631416`
                     */
                    X: number;
                    /**
                     * 结节在物理坐标系中的y轴坐标值。
                     * @example `-32.23147700784307`
                     */
                    Y: number;
                    /**
                     * 结节在物理坐标系中的z轴坐标值。
                     * @example `-46.81608170781766`
                     */
                    Z: number;
                    /**
                     * 结节在图像坐标系中的x轴坐标值。
                     * @example `308.9676976455463`
                     */
                    ImageX: number;
                    /**
                     * 结节在图像坐标系中的y轴坐标值。
                     * @example `198.3552282631497`
                     */
                    ImageY: number;
                    /**
                     * 结节在图像坐标系中的z轴坐标值。
                     * @example `198.3552282631497`
                     */
                    ImageZ: number;
                    /**
                     * 结节最大径位置所在帧的ID标识。
                     * @example `1.3.6.1.4.1.14519.5.2.1.6279.6001.468208655866166788627471660948`
                     */
                    RecistSOPInstanceUID: string;
                    /**
                     * \[start_x, start_y, end_x, end_y, len]五元组，其中start和end为图像坐标系下长径的起止点，len为长径长度（mm）。
                     */
                    MajorAxis: number[];
                    /**
                     * \[start_x, start_y, end_x, end_y, len]五元组，其中start和end为图像坐标系下短径的起止点，len为长径长度（mm）。
                     */
                    MinorAxis: number[];
                    /**
                     * 结节为恶性的置信度。取值范围0~1。
                     * @example `0.173`
                     */
                    Risk: number;
                }[];
                /**
                 * 图像坐标系原点在物理坐标系中的位置。
                 */
                Origin: number[];
                /**
                 * 该DICOM序列经过AI分析后AI服务给出的参考报告。
                 * @example `肺部见1个实性结节，直径约为25.60mm，体积为11512.06mm³，平均CT值为-6.90HU。`
                 */
                Report: string;
                /**
                 * 每个像素的实际距离间隔。
                 */
                Spacing: number[];
            }[];
        };
        /**
         * 冠脉钙化积分测算算法的输出结果。
         */
        CACS: {
            /**
             * 分割结果下载地址，有效时间5分钟。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-cacs/2020-09-29/2020-09-29-11%3A07%3A41-D74FE0DF-8F80-41EB-B08B-2E67053587EC.tar.gz?Expires=1601350661&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=iB16ms28Y5mzB11ghYUd7upCi4****`
             */
            ResultUrl: string;
            /**
             * 冠脉钙化积分值。
             * @example `4.83`
             */
            Score: string;
            /**
             * 体积积分，即钙化点总体积。
             * @example `111.96`
             */
            VolumeScore: string;
            /**
             * 钙化病灶详细列表。
             */
            Detections: {
                /**
                 * 钙化病灶的序号，从1开始。
                 * @example `1`
                 */
                CalciumId: number;
                /**
                 * 病灶钙化积分。
                 * @example `19.22474`
                 */
                CalciumScore: number;
                /**
                 * 病灶体积积分。
                 * @example `28.837109`
                 */
                CalciumVolume: number;
                /**
                 * 图像坐标系下病灶中心坐标\[x, y, z]。
                 */
                CalciumCenter: number[];
            }[];
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.392.489642.9116.2.6.1.44063.1986736248.1658817546.650139`
             */
            SeriesInstanceUID: string;
        };
        /**
         * 新冠肺炎算法的输出结果。
         */
        Covid: {
            /**
             * 普通肺炎的概率。
             * @example `0.7230905`
             */
            NormalProbability: string;
            /**
             * 新冠肺炎概率。
             * @example `4.062644e-06`
             */
            NewProbability: string;
            /**
             * 白化比例。
             * @example `0.9387283236994219`
             */
            LesionRatio: string;
            /**
             * 其他概率。
             * @example `0.27690542`
             */
            OtherProbability: string;
            /**
             * NII格式的mask文件HTTP地址。
             * @example `http://algo-app-aic-med-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/covid19-dcm/unspecified/2020032702/1b1e1018-6fcf-11ea-8fa1-d20b34387541.nii.gz?Expires=1585276394&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=%2F1LNGWJUqvY0VRYGgg8Ldtb3BF****`
             */
            Mask: string;
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.392.200036.9116.2.6.1.44063.1805049129.1658817546.650139`
             */
            SeriesInstanceUID: string;
        };
        /**
         * 肋骨骨折检测算法的输出结果。
         */
        DetectRibFracture: {
            /**
             * 分割结果下载地址，有效时间5分钟。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/detect-rib-fracture/local_test/2020-12-22/result-D5CD101C-F8E5-43CA-9E99-44C783B8F8BE.tar.gz?Expires=1608631727&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=d6c32E1IB4b7Ayo1lpjs%2Bq3Ylv****`
             */
            ResultURL: string;
            /**
             * 每个像素之间的物理距离间隔。
             */
            Spacing: number[];
            /**
             * 像素坐标系原点在物理坐标系中的位置。
             */
            Origin: number[];
            /**
             * 肋骨骨折检出结果。
             */
            Detections: {
                /**
                 * 骨折处序号，从1起始。
                 * @example `2`
                 */
                FractureId: number;
                /**
                 * 骨折分类的置信度。
                 * @example `0.7916666666666667`
                 */
                FractureConfidence: number;
                /**
                 * 骨折分类结果。
                 * - 1：移位骨折。
                 * - 2：非移位骨折。
                 * - 3：皮质弯曲。
                 * - 4：陈旧骨折。
                 * @example `1`
                 */
                FractureCategory: number;
                /**
                 * 物理坐标系下骨折检测框，以这个顺序排列：(minX, minY, minZ, maxX, maxY, maxZ)。
                 */
                Coordinates: number[];
                /**
                 * 图像坐标系下骨折检测框，以这个顺序排列：(minX, minY, minZ, maxX, maxY, maxZ)。
                 */
                CoordinateImage: number[];
                /**
                 * 骨折所在肋骨编号（L1~L12，R1~R12）。L表示左侧，R表示右侧。
                 * @example `L4`
                 */
                FractureLocation: string;
                /**
                 * 骨折所在肋骨段。取值如下：
                 * - 0：前段
                 * - 1：腋段
                 * - 2：后段
                 * @example `0`
                 */
                FractureSegment: number;
                /**
                 * 骨折中间帧在整个DICOM序列中的唯一标识符，如果是NIFTI格式的输入，默认设置为None。
                 * @example `None`
                 */
                FracSOPInstanceUID: string;
            }[];
            /**
             * 肋骨分段关联图像URL地址，有效时间5分钟，格式为**.nii.gz**。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-chest-ct/detect-rib-fracture/2022-07-27/2022-07-27-15_15_39-8BBD1C28-383A-548F-AD7D-CB5E0ABA207D_be6ffcb2d2e9494cba8112e07f93f466_ribFracture-ribmask.nii.gz?Expires=1659165340&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=5Z%2FCS3B%2B%2Ff6nlBk7alY39LvH3****`
             */
            RibSegmentMaskURL: string;
            /**
             * 骨折病灶关联图像URL地址，有效时间5分钟，格式为**.nii.gz**。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-chest-ct/detect-rib-fracture/2022-07-27/2022-07-27-15_15_39-8BBD1C28-383A-548F-AD7D-CB5E0ABA207D_be6ffcb2d2e9494cba8112e07f93f466_ribFracture-mask.nii.gz?Expires=1659165340&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=2lzFDLfGbhVXsHm%2BKhgpglWmA****`
             */
            FractureMaskURL: string;
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.392.489642.9116.2.6.1.78361.1298784213.1658817546.650139`
             */
            SeriesInstanceUID: string;
        };
        /**
         * 错误码描述。
         * @example `Failed to execute [cacs,covid]`
         */
        ErrorMessage: string;
        /**
         * 主动脉瘤肺动脉高压检测算法的输出结果。
         */
        AnalyzeChestVessel: {
            /**
             * 主动脉分析结果。
             */
            AortaInfo: {
                /**
                 * 主动脉血管最大截面积在**Area**中的索引。
                 * @example `416`
                 */
                MaxAreaIndex: number;
                /**
                 * 在**Area**中，主动脉血管截面积中的最大值。
                 * @example `2722`
                 */
                MaxArea: number;
                /**
                 * 最大截面积处的血管最大直径，单位为毫米。
                 * @example `63`
                 */
                MaxDiameter: number;
                /**
                 * 当前血管在血管分割Mask中的Label值。AortaInfo中取值为2。
                 * @example `2`
                 */
                LabelValue: number;
                /**
                 * 在病人坐标系下，血管中心线上从起始点到终点每隔1毫米的点对应的XYZ三维坐标序列。
                 */
                Coordinates: number[][];
                /**
                 * 1
                 */
                Area: number[];
            };
            /**
             * 肺动脉分析结果。
             */
            PulmonaryInfo: {
                /**
                 * 肺动脉血管最大截面积在**Area**中的索引。
                 * @example `0`
                 */
                MaxAreaIndex: number;
                /**
                 * 在**Area**中，肺动脉血管截面积中的最大值。
                 * @example `928`
                 */
                MaxArea: number;
                /**
                 * 最大截面积处的血管最大直径，单位为毫米。
                 * @example `42`
                 */
                MaxDiameter: number;
                /**
                 * 当前血管在血管分割Mask中的Label值。PulmonaryInfo中取值为1。
                 * @example `1`
                 */
                LabelValue: number;
                /**
                 * 在病人坐标系下，血管中心线上从起始点到终点每隔1毫米的点对应的XYZ三维坐标序列。
                 */
                Coordinates: number[][];
                /**
                 * 1
                 */
                Area: number[];
                /**
                 * 主动脉中心线上最靠近肺动脉截面积最大处的点处的主动脉截面积。
                 * @example `2439`
                 */
                NearestAortaArea: number;
            };
            /**
             * CPR相关结果下载地址。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/ct_artery_aa_ph/local_test/2021-07-08/6C4713DF-F548-47DF-A456-5DA1C8334444_result_compressed.tgz?Expires=1625732732&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=5UKVmLfM7GWllIcPr9a6dKz%2B5h****`
             */
            ResultURL: string;
        };
        /**
         * 当请求参数**Verbose**输入为1，且提交的DICOM数据为单序列时返回的DICOM文件地址。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/coronacases_org_001/1.2.112.92121.1.1689.19.2.2020040219072764787101585825****.dcm`
         */
        URLList: any;
        /**
         * 淋巴结检测算法的输出结果。
         */
        DetectLymph: {
            /**
             * 病灶描述。
             */
            Lesions: {
                /**
                 * 置信度，取值范围0~1。
                 * > 使用时建议选择置信度大于0.5的数据。
                 * @example `0.6298`
                 */
                Score: number;
                /**
                 * 关键帧。
                 * > 关键帧为病灶短径最大的横轴位切面。
                 * @example `7`
                 */
                KeySlice: number;
                /**
                 * 病灶3D标识框坐标（X1,Y1,Z1,X2,Y2,Z2）。
                 */
                Boxes: number[];
                /**
                 * 长径和短径长度，单位：毫米。
                 */
                Diametermm: number[];
                /**
                 * 实体肿瘤疗效评价标准，即利用长短径来评判疗效。
                 */
                Recist: number[][];
            }[];
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.568.200036.9116.2.6.1.44063.1805049129.1357480934.650139`
             */
            SeriesInstanceUID: string;
        };
        /**
         * 胰腺癌检测算法的输出结果。
         */
        DetectPdac: {
            /**
             * 病灶描述。
             */
            Lesion: {
                /**
                 * 三类分类预测的概率，依次对应正常胰腺、胰腺癌、非胰腺癌病变，取值范围0~1。
                 */
                Possibilities: string[];
                /**
                 * 胰腺体积，单位：cm<sup icmsditafragmentmagic=1>3</sup>。
                 * @example `0`
                 */
                PancVol: string;
                /**
                 * 胰腺癌病变体积，单位：cm<sup icmsditafragmentmagic=1>3</sup>。
                 * @example `0`
                 */
                PdacVol: string;
                /**
                 * 非胰腺癌病变体积，单位：cm<sup icmsditafragmentmagic=1>3</sup>。
                 * @example `0`
                 */
                NonPdacVol: string;
                /**
                 * 病灶Mask地址。
                 * > 有效时间为5分钟，5分钟后链接失效，需要重新生成。
                 * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-pdac/2022-05-25_14%3A33%3A30/4CA2BF25-BCDB-9C6C-B14C-EB41E8266588.nii.gz?Expires=1653462210&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=8t%2FknUrQyyyCU2p7QhMC%2BXBCR****`
                 */
                Mask: string;
            };
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.239.200036.9116.2.6.1.44063.1805049129.1357480934.650139`
             */
            SeriesInstanceUID: string;
        };
        /**
         * 当请求参数**Verbose**输入为2，或当提交的DICOM数据为多序列且**Verbose**不为0时，返回的DICOM文件地址。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/coronacases_org_001/1.2.112.92121.1.1689.19.2.2020040219072764787101585825****.dcm`
         */
        NestedUrlList: any;
        /**
         * 食管癌检测算法的输出结果。
         */
        ScreenEc: {
            /**
             * 病灶描述。
             */
            Lesion: {
                /**
                 * 三类分类预测的概率，依次对应正常食管、食管癌、非食管癌病变，取值范围0~1。
                 */
                Possibilities: string[];
                /**
                 * 食管体积，单位：cm³。
                 * @example `26814`
                 */
                EsoVolume: string;
                /**
                 * 食管癌病变体积，单位：cm³。
                 * @example `0`
                 */
                EcVolume: string;
                /**
                 * 非食管癌病变体积，单位：cm³。
                 * @example `0`
                 */
                BenignVolume: string;
                /**
                 * 病灶Mask地址。
                 * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-pdac/2022-05-25_14%3A33%3A30/4CA2BF25-BCDB-9C6C-B14C-EB41E8266588.nii.gz?Expires=1653462210&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=8t%2FknUrQyyyCU2p7QhMC%2BXBCR****`
                 */
                Mask: string;
            };
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.112.92121.1.1689.19.1.2020040219072609340210`
             */
            SeriesInstanceUid: string;
        };
        /**
         * 胃癌检测算法的输出结果。
         */
        ScreenGC: {
            /**
             * 病灶描述。
             */
            Lesion: {
                /**
                 * 三类分类预测的概率，依次对应正常胃部、胃癌、非胃癌病变，取值范围0~1。
                 */
                Probabilities: string[];
                /**
                 * 胃部体积，单位：cm³。
                 * @example `508.79`
                 */
                StomachVolume: string;
                /**
                 * 胃癌病变体积，单位：cm³。
                 * @example `5.86`
                 */
                GCVolume: string;
                /**
                 * 非胃癌病变体积，单位：cm³。
                 * @example `0.00`
                 */
                NonGCVolume: string;
                /**
                 * 病灶Mask地址。
                 * > 有效时间为30分钟，30分钟后链接失效，需要重新生成。
                 * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen_gc/gc_11949981_stomach.nii.gz?Expires=1680678697&OSSAccessKeyId=LTAI4GC2dJzdf8ZvnC16****&Signature=EpKCTEPipWO0AiB3Uip85c%2BuMg****`
                 */
                Mask: string;
            };
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.365.465882.9567.2.6.1.78561.1298784213.1653654746.650139`
             */
            SeriesInstanceUid: string;
        };
        /**
         * 结直肠癌检测算法的输出结果。
         */
        ScreenCRC: {
            /**
             * 病灶描述。
             */
            Lesion: {
                /**
                 * 两类分类预测的概率，依次对应健康、结直肠癌。
                 */
                Probabilities: string[];
                /**
                 * 结直肠体积，单位：立方厘米（cm³）。
                 * @example `255.93`
                 */
                ColorectumVolume: string;
                /**
                 * 病灶Mask，以HTTP地址给出。
                 * > 有效时间为30分钟，30分钟后链接失效，需要重新生成。
                 * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen_crc/crc_case2_pre.nii.gz?Expires=1680766116&OSSAccessKeyId=LTAI4GC2dJzdf8ZvnC16****&Signature=9n9C%2B2MnyvLwAC%2FwFyxgY****`
                 */
                Mask: string;
            };
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.425.324582.4667.2.6.1.707564.5693464213.6748794746.650139`
             */
            SeriesInstanceUid: string;
        };
        /**
         * 肝癌检测算法的输出结果。
         */
        ScreenLC: {
            /**
             * 病灶描述。
             */
            Lesion: {
                /**
                 * 病灶mask。
                 * @example `20-050_0000.nii.gz`
                 */
                Mask: string;
                /**
                 * 病人级别诊断。
                 * > 病人诊断有肝癌的概、非肝癌的恶性肿瘤的概率、非囊肿的良性肿瘤的概率以及有囊肿的概率的和不为1，因为病人可能有多种肿瘤。
                 */
                PatientLevelResult: {
                    /**
                     * 诊断为肝癌的概率。
                     * @example `0.9941`
                     */
                    HCCProb: string;
                    /**
                     * 诊断有非肝癌的恶性肿瘤的概率。
                     * @example `0.0073`
                     */
                    MalignantNonHCCProb: string;
                    /**
                     * 诊断有非囊肿的良性肿瘤的概率。
                     * @example `0.0077`
                     */
                    BenignNonCystProb: string;
                    /**
                     * 诊断有囊肿的概率。
                     * @example `0.9233`
                     */
                    CystProb: string;
                };
                /**
                 * 肝脏（包括肿瘤）总体积，单位：立方厘米（cm³）。
                 * @example `1364.9468`
                 */
                LiverVolume: string;
                /**
                 * 病灶列表。
                 */
                LesionList: {
                    /**
                     * 病灶类别：HCC、other_malignant、other_benign、cyst。
                     * @example `HCC`
                     */
                    Type: string;
                    /**
                     * 病灶体积，单位：立方厘米（cm³）。
                     * @example `305.3661`
                     */
                    Volume: number;
                    /**
                     * RECIST长短径所在的关键帧（第一帧编号为0）。
                     * @example `100`
                     */
                    KeySlice: number;
                    /**
                     * RECIST长短径的端点，[[x11,y11],[x12,y12],[x21,y21],[x22,y22]]，其中[x11,y11],[x12,y12]代表长径，[x21,y21], [x22,y22]代表短径。
                     */
                    RecistEndpoints: number[];
                    /**
                     * 长短径的长度，单位：毫米（mm）。
                     */
                    Diameter: number[];
                    /**
                     * 恶性概率。
                     * @example `0.9375`
                     */
                    Malignancy: number;
                }[];
            };
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.809.344582.2357.2.6.1.654764.523664213.6748794746.650139`
             */
            SeriesInstanceUid: string;
        };
        /**
         * 心血管不良事件检测算法的输出结果。
         */
        PredictCVD: {
            /**
             * 病灶描述。
             */
            Lesion: {
                /**
                 * 病灶mask，以HTTP地址给出。
                 * > 有效时间为30分钟，30分钟后链接失效，需要重新生成。
                 */
                ResultURL: string[];
                /**
                 * 取值（0,1）之间，描述该特征在cvd风险预测中的权重。
                 * @example `0.5`
                 */
                CVDProbability: number;
                /**
                 * 特征值描述。
                 */
                FeatureScore: {
                    /**
                     * 升主动脉最大直径。
                     */
                    AscAoMaxDiam: number[];
                    /**
                     * 心肌/心外膜比率。
                     */
                    MyoEpiRatio: number[];
                    /**
                     * 冠状动脉钙化体积，单位：立方厘米（cm³）。
                     */
                    CoronaryCalciumVol: number[];
                    /**
                     * 心脏表面和心包之间的脂肪组织体积，单位：立方厘米（cm³）。
                     */
                    EatVolume: number[];
                    /**
                     * 主动脉钙化评分。
                     */
                    AortaCalciumScore: number[];
                    /**
                     * 心胸比。
                     */
                    CardioThoracicRatio: number[];
                    /**
                     * 心外脂肪组织的平均Hounsfield单位数值。
                     */
                    EatHUMean: number[];
                    /**
                     * 心外脂肪组织的Hounsfield单位数值的标准差。
                     */
                    EatHUSTD: number[];
                    /**
                     * 右肺低密度区域比值。
                     */
                    RightLungLowattRatio: number[];
                    /**
                     * 升主动脉长度。
                     */
                    AscendAortaLength: number[];
                    /**
                     * 左肺低密度区域比值。
                     */
                    LeftLungLowattRatio: number[];
                    /**
                     * 深度特征值。
                     */
                    DeepFeature: number[];
                    /**
                     * 主动脉钙化体积，单位：立方厘米（cm³）。
                     */
                    AortaCalciumVolume: number[];
                };
            };
            /**
             * 当前结果对应的序列ID。
             * @example `1.2.119.569382.6757.2.6.1.895664.343664213.6748794746.650139`
             */
            SeriesInstanceUid: string;
        };
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
