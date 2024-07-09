export interface AddAiotPersonTableItemRequest {
    "Id": string;
    "PersonTableId": string;
    "PersonTableItem": {
        PersonTableId: string;
        PersonId: string;
        LastChange: string;
        PersonCode: string;
        PersonName: string;
        Remarks: string;
        TimeTemplateNum: number;
        IdentificationNum: number;
        IdentificationList: {
            Type: number;
            Number: string;
        }[];
        ImageNum: number;
        ImageList: {
            ImageId: string;
            EventSort: string;
            DeviceId: string;
            StoragePath: string;
            Size: number;
            Type: string;
            FileFormat: string;
            ShotTime: string;
            Width: number;
            Height: number;
            Data: string;
            FeatureInfo: {
                Vendor: string;
                AlgorithmVersion: string;
                AlgorithmType: string;
                TabId: string;
                OjectId: string;
                ImageId: string;
                FeatureData: string;
            };
        }[];
    };
}
