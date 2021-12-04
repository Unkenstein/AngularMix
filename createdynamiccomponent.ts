export class InquiryDialog implements OnInit {

  componentRef: ComponentRef;
  @ViewChild('inquiryPage', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: InquiryDialogData, private componentFactoryResolver: ComponentFactoryResolver) {}
              
  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.inquiryPageComponent);

    this.componentRef = this.container.createComponent(componentFactory);   
  }
}
