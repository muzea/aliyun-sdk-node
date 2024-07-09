export interface StartWorkflowRequest {
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 工作流类型，可选值：wgs或mapping。
         * @example `mapping`
         */
        workflow_type: string;
        /**
         * SLA类型，可选值：s、g、p。
         * - 白银级（s）：超过90 Gbp的部分，按1.5 Gbp/min计算增加的时间。
         * - 黄金级（g）：超过90 Gbp的部分，按2 Gbp/min计算增加的时间。
         * - 铂金级（p）：超过90 Gbp的部分，按3 Gbp/min计算增加的时间。
         * @example `s`
         */
        service: string;
        /**
         * mapping oss数据的存放region。
         * @example `cn-hangzhou`
         */
        mapping_oss_region: string;
        /**
         * mapping的第一个fastq文件名。
         * @example `MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_1.fq.gz`
         */
        mapping_fastq_first_filename: string;
        /**
         * mapping的第二个fastq文件名。
         * @example `MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_2.fq.gz`
         */
        mapping_fastq_second_filename: string;
        /**
         * 存放mapping的bucket名称。
         * @example `gene-shenzhen`
         */
        mapping_bucket_name: string;
        /**
         * mapping的fastq文件路径。
         * @example `fastq/MGISEQ2000`
         */
        mapping_fastq_path: string;
        /**
         * mapping的reference文件位置。
         * @example `reference/hg19`
         */
        mapping_reference_path: string;
        /**
         * 是否进行dup。
         * @example `true`
         */
        mapping_is_mark_dup: string;
        /**
         * bam文件输出路径。
         * @example `output/bamDirName`
         */
        mapping_bam_out_path: string;
        /**
         * bam文件输出名称。
         * @example `abc.bam`
         */
        mapping_bam_out_filename: string;
        /**
         * wgs oss数据的存放region。
         * @example `cn-shenzhen`
         */
        wgs_oss_region: string;
        /**
         * wgs的第一个fastq文件名。
         * @example `MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_1.fq.gz`
         */
        wgs_fastq_first_filename: string;
        /**
         * wgs的第二个fastq文件名。
         * @example `MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_2.fq.gz`
         */
        wgs_fastq_second_filename: string;
        /**
         * 存放wgs的bucket名称。
         * @example `gene-shenzhen`
         */
        wgs_bucket_name: string;
        /**
         * wgs的fastq文件路径。
         * @example `fastq/MGISEQ2000`
         */
        wgs_fastq_path: string;
        /**
         * wgs的reference文件路径。
         * @example `reference/hg19`
         */
        wgs_reference_path: string;
        /**
         * wgs的vcf输出路径。
         * @example `output/vcf`
         */
        wgs_vcf_out_path: string;
        /**
         * wgs的vcf输出文件名称。
         * @example `abc.vcf`
         */
        wgs_vcf_out_filename: string;
    };
}
