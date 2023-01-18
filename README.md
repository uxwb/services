# @uxwb/services

## Installation

```bash
  $ npm i @uxwb/services --save
```

## Config

```typescript
class Config {
  ajaxPrefixUrl?:string;
  webSocketUrl?:string;
}
```
## Use

```typescript
import { UxwbServicesModule } from '@uxwb/services';

@NgModule({
  ...
  imports: [
    ...
    UxwbServicesModule.forRoot({ ajaxPrefixUrl:'/api', webSocketUrl:'/ws' }),
  ],
  ...
})
```

## License

BSD-3-Clause License. See the LICENSE file for details.
