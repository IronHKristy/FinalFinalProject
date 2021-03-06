<div class="row">
  <div class="col-md-1">
  </div>
  <div class="col-md-3">
    <form>
      <h2> Login or Signup </h2>
      <table>
        <tr>
          <td>Username</td>
          <td><input type="text" [(ngModel)]="formInfo.username" name="username"/></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="password" [(ngModel)]="formInfo.password" name="password"/></td>
        </tr>
        <tr>
          <td><button (click)="login()"> Login </button></td>
          <td><button (click)="signup()"> Sign Up </button></td>
        </tr>

      </table>
    </form>
    <p class="error"> {{ error }} </p>


    <div *ngIf="user">
      <h2> You are now logged in as {{ user.username }}!! </h2>
      <h2> Create Your Profile</h2>
      <p> Here's the user object </p>
      <pre> {{ user | json }} </pre>

      <p *ngIf="privateData"> Here's some data fetched from a protected API </p>
      <pre> {{ privateData | json }} </pre>

      <button (click)="logout()"> logout </button>
      <button (click)="getPrivateData()"> Get private data </button>
    </div>
  </div>
  <div class="col-md-4">
    <h2>Request Student Profile</h2>
    <table>
      <tr>
        <td>Name</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.name" name="name" placeholder="Name" required></td>
      </tr>
      <tr>
        <td>Instrument</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.instrument" name="instrument" placeholder="Instrument" required></td>
      </tr>
      <tr>
        <td>Location</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.location" name="location" value="Miami, FL" required></td>
      </tr>
      <tr>
        <td>Phone</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.phone" name="phone" placeholder="123-456-7890" required></td>
      </tr>
      <tr>
        <td>email</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.email" name="email" placeholder="Email" required></td>
      </tr>
      <tr>
        <td><button class="btn btn-primary">Create Request</button></td>
        <td></td>
      </tr>

    </table>

  </div>
  <div class="col-md-4">
    <h2>Request Teacher Profile</h2>
    <table>
      <tr>
        <td>Name</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.name" name="name" placeholder="Name" required></td>
      </tr>
      <tr>
        <td>Instrument</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.instrument" name="instrument" placeholder="Instrument" required></td>
      </tr>
      <tr>
        <td>Location</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.location" name="location" value="Miami, FL" required></td>
      </tr>
      <tr>
        <td>Phone</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.phone" name="phone" placeholder="123-456-7890" required></td>
      </tr>
      <tr>
        <td>email</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.email" name="email" placeholder="Email" required></td>
      </tr>
      <tr>
        <td>bio</td>
        <td><input [(ngModel)]="name" type="text" [(ngModel)]="formInfo.bio" name="bio"  placeholder="Describe Yourself" required></td>
      </tr>
      <tr>
        <td><button class="btn btn-primary">Create Request</button></td>
        <td></td>
      </tr>
    </table>

  </div>
</div>
