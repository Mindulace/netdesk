<template>
    <div class="component dashboard-card rounded d-inline-block m-4 p-3">
        <div class="card-headline border-bottom pb-2">
            Geschwindigkeit
        </div>
        <div class="card-content pt-2 text-center d-flex justify-content-around">
            <div class="content-wrapper d-inline-block align-self-center">
                <i class="large fas fa-tachometer-alt"></i><br />
                100 mBit/s
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-speed'
}
</script>

<style>

.dashboard-card {
    width: 410px;
    height: 170px;
    background-image: linear-gradient(45deg, #E91E63, #673AB7);

    color: #fff;
    cursor: pointer;
    font-weight: 900;
}

.card-headline {
    font-weight: 900;
}

.card-content {
    height: calc(100% - 33px);
}

i.large {
    font-size: 50px;
}
</style>